FROM oven/bun:1.4.2 AS build
WORKDIR /app
COPY package.json package.json
COPY bun.lock bun.lock
COPY bunfig.toml bunfig.toml
RUN bun install --frozen-lockfile
COPY ./src ./src
ENV NODE_ENV=production
RUN bun build \
  --compile \
  --minify-whitespace \
  --minify-syntax \
  --outfile server \
  src/index.ts

FROM gcr.io/distroless/base
WORKDIR /app
COPY --from=build /app/server server
CMD ["./server"]
