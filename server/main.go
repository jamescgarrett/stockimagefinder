package main

import(
    "net/http"
    "os"
    "log"

    "github.com/codegangsta/negroni"
    "github.com/unrolled/render"
    "github.com/rs/cors"
)

var Render *render.Render
func init() {
    Render = render.New(render.Options{
        Layout: "layout",
        IsDevelopment: true,
    })
}

func main() {
    port := os.Getenv("PORT")
    if port == "" {
        log.Fatal("$PORT must be set")
    }

    c := cors.New(cors.Options{
        AllowedOrigins: []string{"http://localhost:8080"},
    })

    n := negroni.New()

    // Set Up Routing
    routes := ConfigureRoutes()

    // Run Server
    n.Use(negroni.NewLogger())
    n.Use(c)

    n.UseHandler(routes)
    http.ListenAndServe(":" + port, n)
}