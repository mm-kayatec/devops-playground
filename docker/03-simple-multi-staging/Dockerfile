FROM golang:1.25 AS builder

WORKDIR /app

COPY . .

RUN go build -o app


FROM alpine:latest 

COPY --from=builder /app/app .

CMD ["./app"]
