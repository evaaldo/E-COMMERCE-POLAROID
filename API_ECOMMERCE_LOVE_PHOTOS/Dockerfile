# Stage 1: Build Stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

# restore
COPY ["API_ECOMMERCE_LOVE_PHOTOS/API_ECOMMERCE_LOVE_PHOTOS.csproj", "API_ECOMMERCE_LOVE_PHOTOS/"]
RUN dotnet restore "API_ECOMMERCE_LOVE_PHOTOS/API_ECOMMERCE_LOVE_PHOTOS.csproj"

# build
COPY API_ECOMMERCE_LOVE_PHOTOS/. API_ECOMMERCE_LOVE_PHOTOS/
WORKDIR /src/API_ECOMMERCE_LOVE_PHOTOS
RUN dotnet build "API_ECOMMERCE_LOVE_PHOTOS.csproj" -c Release -o /app/build

# Stage 2: Publish Stage
FROM build AS publish
RUN dotnet publish "API_ECOMMERCE_LOVE_PHOTOS.csproj" -c Release -o /app/publish

# Stage 3: Run Stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
ENV ASPNETCORE_HTTP_PORTS=7173
EXPOSE 7173
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT [ "dotnet", "API_ECOMMERCE_LOVE_PHOTOS.dll" ]
