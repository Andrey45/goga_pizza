package main

import (
    "fmt"
    "github.com/gin-gonic/gin"
    "github.com/jmoiron/sqlx/types"
    "net/http"
)

type pizza struct {
    Id     int32   `json:"id"`
    Name   string  `json:"name"`
    Imeges string  `json:"imeges"`
    Stars  float32 `json:"stars"`
    Inged  types.JSONText `json:"inged"`
}

func html(c*gin.Context)  {
    c.HTML(http.StatusOK, "index.html", nil)
}

func RuPizzaNewGet (c *gin.Context) {
    rows, err := db.Query("SELECT p.id_pizz, p.name_ru, p.imeg, p.stars, pr.ingredients_ru from pizza p RIGHT JOIN ingredients pr ON pr.id_pizz = p.id_pizz where p.id_pizz <=4")
    if err != nil {
        fmt.Print(err)
    }
    defer rows.Close()
    pizz := []pizza{}

    for rows.Next() {
        p := pizza{}
        err := rows.Scan(&p.Id, &p.Name, &p.Imeges, &p.Stars, &p.Inged)
        if err != nil {
            fmt.Println(err)
            continue
        }
        pizz = append(pizz, p)
    }

    c.JSON(200, pizz)
}

func RuPizzaGet(c *gin.Context)  {
    rows, err := db.Query("SELECT p.id_pizz, p.name_ru, p.imeg, p.stars, pr.ingredients_ru from pizza p RIGHT JOIN ingredients pr ON pr.id_pizz = p.id_pizz")
    if err != nil {
        fmt.Print(err)
    }
    defer rows.Close()
    pizz := []pizza{}

    for rows.Next() {
        p := pizza{}
        err := rows.Scan(&p.Id, &p.Name, &p.Imeges, &p.Stars, &p.Inged)
        if err != nil {
            fmt.Println(err)
            continue
        }
        pizz = append(pizz, p)
    }

    c.JSON(200, pizz)
}
func EnPizzaGet(c *gin.Context)  {
    rows, err := db.Query("SELECT p.id_pizz, p.name_en, p.imeg, p.stars, pr.ingredients_en from pizza p RIGHT JOIN ingredients pr ON pr.id_pizz = p.id_pizz")
    if err != nil {
        fmt.Print(err)
    }
    defer rows.Close()
    pizz := []pizza{}

    for rows.Next() {
        p := pizza{}
        err := rows.Scan(&p.Id, &p.Name, &p.Imeges, &p.Stars, &p.Inged)
        if err != nil {
            fmt.Println(err)
            continue
        }
        pizz = append(pizz, p)
    }

    c.JSON(200, pizz)
}

func EnPizzaNewGet(c *gin.Context)  {
    rows, err := db.Query("SELECT p.id_pizz, p.name_en, p.imeg, p.stars, pr.ingredients_en from pizza p RIGHT JOIN ingredients pr ON pr.id_pizz = p.id_pizz where p.id_pizz <= 4")
    if err != nil {
        fmt.Print(err)
    }
    defer rows.Close()
    pizz := []pizza{}

    for rows.Next() {
        p := pizza{}
        err := rows.Scan(&p.Id, &p.Name, &p.Imeges, &p.Stars, &p.Inged)
        if err != nil {
            fmt.Println(err)
            continue
        }
        pizz = append(pizz, p)
    }

    c.JSON(200, pizz)
}

func GerPizzaNewGet(c *gin.Context)  {
    rows, err := db.Query("SELECT p.id_pizz, p.name_ger, p.imeg, p.stars, pr.ingredients_ger from pizza p RIGHT JOIN ingredients pr ON pr.id_pizz = p.id_pizz where p.id_pizz <= 4")
    if err != nil {
        fmt.Print(err)
    }
    defer rows.Close()
    pizz := []pizza{}

    for rows.Next() {
        p := pizza{}
        err := rows.Scan(&p.Id, &p.Name, &p.Imeges, &p.Stars, &p.Inged)
        if err != nil {
            fmt.Println(err)
            continue
        }
        pizz = append(pizz, p)
    }

    c.JSON(200, pizz)
}

func GerPizzaGet(c *gin.Context)  {
    rows, err := db.Query("SELECT p.id_pizz, p.name_ger, p.imeg, p.stars, pr.ingredients_ger from pizza p RIGHT JOIN ingredients pr ON pr.id_pizz = p.id_pizz")
    if err != nil {
        fmt.Print(err)
    }
    defer rows.Close()
    pizz := []pizza{}

    for rows.Next() {
        p := pizza{}
        err := rows.Scan(&p.Id, &p.Name, &p.Imeges, &p.Stars, &p.Inged)
        if err != nil {
            fmt.Println(err)
            continue
        }
        pizz = append(pizz, p)
    }

    c.JSON(200, pizz)
}

func ItPizzaNewGet(c *gin.Context)  {
    rows, err := db.Query("SELECT p.id_pizz, p.name_it, p.imeg, p.stars, pr.ingredients_it from pizza p RIGHT JOIN ingredients pr ON pr.id_pizz = p.id_pizz where p.id_pizz <= 4")
    if err != nil {
        fmt.Print(err)
    }
    defer rows.Close()
    pizz := []pizza{}

    for rows.Next() {
        p := pizza{}
        err := rows.Scan(&p.Id, &p.Name, &p.Imeges, &p.Stars, &p.Inged)
        if err != nil {
            fmt.Println(err)
            continue
        }
        pizz = append(pizz, p)
    }

    c.JSON(200, pizz)
}

func ItPizzaGet(c *gin.Context)  {
    rows, err := db.Query("SELECT p.id_pizz, p.name_it, p.imeg, p.stars, pr.ingredients_it from pizza p RIGHT JOIN ingredients pr ON pr.id_pizz = p.id_pizz")
    if err != nil {
        fmt.Print(err)
    }
    defer rows.Close()
    pizz := []pizza{}

    for rows.Next() {
        p := pizza{}
        err := rows.Scan(&p.Id, &p.Name, &p.Imeges, &p.Stars, &p.Inged)
        if err != nil {
            fmt.Println(err)
            continue
        }
        pizz = append(pizz, p)
    }

    c.JSON(200, pizz)
}

