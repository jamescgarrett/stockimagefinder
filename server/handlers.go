package main

import (
    "net/http"
    "encoding/json"
)

type SearchRequest struct {
    Query string `json:"query"`
    Style string `json:"style"`
    Orientation string `json:"orientation"`
    Sources []string `json:"sources"`
}
func Search(w http.ResponseWriter, r *http.Request){
    decoder := json.NewDecoder(r.Body)
    var req SearchRequest   
    err := decoder.Decode(&req)
    if err != nil {
        Render.JSON(w, http.StatusOK, map[string]interface{}{
            "statusCode": http.StatusUnprocessableEntity,
            "error": err.Error(),
        })
        return
    }
    defer r.Body.Close()

    // make sure a source was selected on the front end form
    if len(req.Sources) == 0 {
        Render.JSON(w, http.StatusOK, map[string]interface{}{
            "statusCode": http.StatusUnprocessableEntity,
            "error": "You forgot to select a source, how else will I know where to look for Rami?",
        })
        return
    }

    // make sure a query string was entered.
    if req.Query == "" {
        Render.JSON(w, http.StatusOK, map[string]interface{}{
            "statusCode": http.StatusUnprocessableEntity,
            "error": "If you're not careful, I'm going to search for Rami, otherwise I need to know what to look for :)",
        })
        return
    }

    sources := make([]string, 0)
    for _, value := range req.Sources {
        sources = append(sources, value)
    }

    results := make(map[string]interface{})
  
    for _, source := range sources {
        
        config, err := getConfig(source)
        if err != nil {
            Render.JSON(w, http.StatusOK, map[string]interface{}{
                "statusCode": http.StatusUnprocessableEntity,
                "error": err.Error(),
            })
            return
        }

        style := config.GetStyle(req.Style)

        orientation := config.GetOrientation(req.Orientation)

        res, err := config.Search(source, req.Query, style, orientation)
        if err != nil {
            Render.JSON(w, http.StatusOK, map[string]interface{}{
                "statusCode": http.StatusUnprocessableEntity,
                "error": err.Error(),
            })
            return
        }

        results[source] = res
    }

    Render.JSON(w, http.StatusOK, map[string]interface{}{
        "statusCode": http.StatusOK,
        "query": req.Query,
        "data": results,
    })
}