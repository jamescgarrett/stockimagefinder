package main

import (
    "net/url"
    "net/http"
    "strings"
    "encoding/json"
    "encoding/xml"
    "io/ioutil"
)

func (c *Config) Search(source, q, style, orientation string) (structure interface{}, err error) {
    query := url.QueryEscape(q)

    url, err := buildUrl(c.Url, query, style, orientation)
    if err != nil {
        return structure, err
    }

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        return structure, err
    }

    switch c.HeaderType {
    case "apikey":
        req.Header.Set(c.HeaderKey, c.ApiKey)
    case "basic":
        req.SetBasicAuth(c.ClientId, c.ClientSecret)
    }

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return structure, err
    }

    raw, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return structure, err
    }

    defer resp.Body.Close()

    structure, err = handleUnmarshal(raw, source)
    if err != nil {
        return structure, err
    }
    
    return structure, nil
}

func (c *Config) GetStyle(style string) (str string) {
    switch style {
    case "photo":
        str = c.StylePhotoString
    case "illustration":
        str = c.StyleIllustrationString
    default:
        str = c.StyleAllString
    }
    return str
}

func (c *Config) GetOrientation(orientation string) (str string) {
    switch orientation {
    case "landscape":
        str = c.OrientationLandscapeString
    case "portrait":
        str = c.OrientationPortraitString
    default:
        str = c.OrientationAllString
    }
    return str
}

func buildUrl(url, query, style, orientation string) (str string, err error) {
    rep := strings.NewReplacer("{query}", query,
        "{style}", style,
        "{orientation}", orientation)
    str = rep.Replace(url)
    return str, nil
}

func handleUnmarshal(raw []byte, source string) (structure interface{}, err error) {
    switch source {
    case "gettyimages":
        var x GettyImagesResults
        if err := json.Unmarshal(raw, &x); err != nil {
            return structure, err
        }
        structure = x
    case "shutterstock":
        var x ShutterstockResults
        if err := json.Unmarshal(raw, &x); err != nil {
            return structure, err
        }
        structure = x
    case "one23rf":
        var x One23rfResults
        if err := xml.Unmarshal(raw, &x); err != nil {
            return structure, err
        }
        structure = x
    }
    return structure, nil
}