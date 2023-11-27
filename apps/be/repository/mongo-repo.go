package repository

import (
	"context"
	"fmt"
	"ginql/graph/model"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type VideoRepository interface {
	Save(video *model.Video)
	FindAll() []*model.Video
}

type database struct {
	client *mongo.Client
}

// FindAll implements VideoRepository.
func (*database) FindAll() []*model.Video {
	panic("unimplemented")
}

// Save implements VideoRepository.
func (*database) Save(video *model.Video) {
	panic("unimplemented")
}

func New() VideoRepository {

	MONGODB := os.Getenv("MONGODB")

	clientOptions := options.Client().ApplyURI(MONGODB)

	clientOptions = clientOptions.SetMaxPoolSize(50)

	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	dbClient, err := mongo.Connect(ctx, clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connect to MongoDB")

	return &database{
		client: dbClient,
	}
}
