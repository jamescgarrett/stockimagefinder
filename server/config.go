package main

import (
    "encoding/json"
   	"io/ioutil"
)

type Configs struct {
	Configs []Config
}

type Config struct {
    Name string `json:"name"`
    ApiKey string `json:"api_key"`
    ClientId string `json:"client_id"`
    ClientSecret string `json:"client_secret"`
    Url string `json:"url"`
    StylePhotoString string `json:"style_photo_string"`
    StyleIllustrationString string `json:"style_illustration_string"`
    StyleAllString string `json:"style_all_string"`
    OrientationLandscapeString string `json:"orientation_landscape_string"`
    OrientationPortraitString string `json:"orientation_portrait_string"`
    OrientationAllString string `json:"orientation_all_string"`
    HeaderType string `json:"header_type"`
    HeaderKey string `json:"header_key"`
    ApiType string `json:"api_type"`
}

func getConfig(filename string) (c Config, err error) {
    raw, err := ioutil.ReadFile("./_config/" + filename + ".json")
    if err != nil {
        return c, err
    }
    err = json.Unmarshal(raw, &c)
    if err != nil {
        return c, err
    }
    return c, nil
}