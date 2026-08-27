# Cloud Logging Mapping

The `orders-api` now emits structured JSON logs with consistent fields such as
`ts`, `level`, `service`, `msg`, and `reqId`.

## Google Cloud Logging

The JSON logs can be collected by a cloud logging agent and ingested as
structured log entries. Fields such as `level`, `service`, and `reqId` can then
be used to filter and search logs.

For example, operators can filter for error-level events and then use the
`reqId` field to trace all log entries belonging to a single request.

## Grafana Loki

The same JSON logs can be collected by a Loki-compatible log agent. The JSON
fields can be parsed and queried using LogQL, allowing operators to search for
error events and correlate related log entries using the request ID.

## Local-to-cloud consistency

The application does not need a different logging format when moving from
Docker logs to a cloud logging platform. The same JSON structure remains
machine-readable and searchable.

No cloud deployment is performed as part of this lab.