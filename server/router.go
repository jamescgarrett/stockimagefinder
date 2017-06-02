package main

import(
    "net/http"

    "github.com/gorilla/mux"
)

func ConfigureRoutes() *mux.Router {
    router := mux.NewRouter()
    router.Handle("/", http.FileServer(http.Dir("./public")))
    router.HandleFunc("/search", Search).Methods("POST")

    // Static resources
    router.PathPrefix("/css/").Handler(http.StripPrefix("/css/", http.FileServer(http.Dir("./public/src/css/"))))
    router.PathPrefix("/js/").Handler(http.StripPrefix("/js/", http.FileServer(http.Dir("./public/src/js/"))))
    return router
}