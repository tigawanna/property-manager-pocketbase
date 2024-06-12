FROM alpine:latest

ARG PB_VERSION=0.22.13

RUN apk add --no-cache \
    unzip \
    ca-certificates \
    # this is needed only if you want to use scp to copy later your pb_data locally
    openssh

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# uncomment to copy the local pb_migrations dir into the container
# COPY ./pb_migrations /pb/pb_migrations

# uncomment to copy the local pb_hooks dir into the container
# COPY ./pb_hooks /pb/pb_hooks

# uncomment to copy the local pb_migrations dir into the image
COPY ./pb_migrations /cloud/storage/property-manager/pb_migrations

# uncomment to copy the local pb_hooks dir into the image
COPY ./pb_hooks /cloud/storage/property-manager/pb_hooks

# uncomment to copy the local pb_public dir into the image
COPY ./pb_public /cloud/storage/property-manager/pb_public

ENV HOST 0.0.0.0
ENV PORT 8080

# start PocketBase
EXPOSE 8080
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080","--dir=/cloud/storage/property-manager/pb_data","--publicDir=/cloud/storage/property-manager/pb_public","--hooksDir=/cloud/storage/property-manager/pb_hooks"]
