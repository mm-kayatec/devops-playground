FROM golang:1.25 AS builder

WORKDIR /app

COPY go.mod .

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o app


FROM alpine

WORKDIR /app

COPY --from=builder /app/app .

USER 10001

EXPOSE 8080

CMD ["./app"]
