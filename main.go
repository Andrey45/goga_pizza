package main

import (
    "database/sql"
    _ "database/sql"
    _ "fmt"
    "github.com/gin-contrib/cors"
    _ "github.com/heroku/x/hmetrics/onload"
    _ "github.com/lib/pq"
    _ "html/template"
    "log"
    _ "net/http"
    "os"

    "github.com/gin-gonic/gin"
    _ "github.com/gin-gonic/gin/render"
    _ "github.com/jmoiron/sqlx/types"
)
var db *sql.DB

func main() {
    port := os.Getenv("PORT")
    //connStr := "postgres://postgres:23012699@localhost:5434/GoGa_Pizza?sslmode=disable"
    dab, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
    if err != nil {
        log.Fatal(err)
    }
    db = dab
    defer dab.Close()
    r := gin.Default()
    r.Use(cors.Default())
    r.LoadHTMLGlob("templates/*.html")
    r.Static("/assets", "./assets")
    r.GET("/", html)
    v1 := r.Group("/api/ru")
    {
        v1.GET("/pizza_new", RuPizzaNewGet)
        v1.GET("/pizza", RuPizzaGet)
    }
    v2 := r.Group("/api/en")
    {
        v2.GET("/pizza_new", EnPizzaNewGet)
        v2.GET("/pizza", EnPizzaGet)
    }
    v3 := r.Group("/api/de")
    {
        v3.GET("/pizza_new", GerPizzaNewGet)
        v3.GET("/pizza", GerPizzaGet)
    }
    v4 := r.Group("/api/it")
    {
        v4.GET("/pizza_new", ItPizzaNewGet)
        v4.GET("/pizza", ItPizzaGet)
    }
    r.Run(":" + port)
}
