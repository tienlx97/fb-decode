package main

import (
	"ginql/http"
	"os"

	"github.com/gin-gonic/gin"
)

const defaultPort = ":8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	// http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	// http.Handle("/query", srv)

	// log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	// log.Fatal(http.ListenAndServe(":"+port, nil))

	// for gin

	r := gin.Default()
	r.GET("/", http.PlaygroundHandler())
	r.POST("/query", http.GraphqlHandler())
	r.Run(defaultPort)
}
