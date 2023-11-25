package main

import (
	"be/graph"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

/*

// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table user {
  id string [primary key]
  first_name string
  last_name string
  middle_name string
  email string
  phone string
}

Table user_address {
  user_id string [ref: > user.id, primary key]
  address_id string [ref: > address.id, primary key]
}

Table address {
  id string [primary key]
  city string
  district string
  ward string
  street string
  country_id string [ref: > country.id]
}

Table country  {
  id string [primary key]
  country_name string
}

*/
