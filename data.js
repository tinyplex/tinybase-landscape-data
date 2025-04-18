// @ts-check
import { LandscapeSchema } from "@localfirstfm/landscape-schema";

export const data = LandscapeSchema.make({
  Version: 1,
  Id: "tinybase",
  Name: "TinyBase",
  Description: "A reactive data store & sync engine.",
  Website: "https://tinybase.org",
  GitHub: "https://github.com/tinyplex/tinybase",
  Logo: {
    Light: "https://tinybase.org/favicon.svg",
    Dark: "https://tinybase.org/favicon.svg",
  },
  MaturityLevel: "Mature",
  InitialReleaseDate: new Date("2022-01-17"),
  Deployment: ["Self-hosted"],
  License: "MIT",
  NotableAdopters: [
    { Name: "Athena Crisis", URL: "https://athenacrisis.com" },
    { Name: "TinyHub", URL: "https://tinyhub.org" },
  ],
  AppTarget: {
    LanguageSDK: { data: ["TypeScript", "JavaScript"] },
    Platform: {
      data: ["Browser", "Node", "React Native", "Deno", "Cloudflare Workers"],
    },
    FrameworkIntegrations: {
      data: ["React", "React Native"],
    },
    ClientBundleSize: {
      data: "5.3kB - 11.5kB",
      comment: "The clue is in the name!",
    },
  },
  Networking: {
    Protocol: {
      data: ["WebSockets", "HTTP"],
    },
    Topology: {
      data: "P2P via Relay Servers",
      comment:
        "Client-server is also made possible by an API that lets the server participate as a peer.",
    },
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: [
        "Cloudflare Durable Object Storage",
        "SQLite",
        "Postgres",
        "Custom",
      ],
    },
    DataSize: {
      data: "Up to 5-10 MB per store",
      comment:
        "The server can also use a database like SQLite or Postgres for larger data.",
    },
    DataModelParadigm: {
      data: "Relational",
      comment: "Both relational and key-value data can be stored and synced.",
    },
  },
  ClientSideData: {
    QueryAPI: { data: ["Sync", "Reactive queries"] },
    LocalRefreshLatency: { data: "~1ms" },
    PersistenceMechanism: {
      data: [
        "SQLite",
        "IndexedDB",
        "PGLite via OPFS",
        "SQLite",
        "Yjs",
        "Custom",
      ],
    },
    PersistenceFeatures: { data: "Indexes" },
    DataModel: { data: "Document" },
    OfflineReads: { data: "Full Support" },
    OfflineWrites: { data: "Local conflict resolution" },
    DataSize: { data: "Up to 5-10 MB per store" },
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: { data: ["Full Replication"] },
    ConflictHandling: { data: "Automatic via CRDT" },
    WhereResolutionOccurs: {
      data: "Client",
      comment: "Server can also resolve conflicts.",
    },
    WhatGetsSynced: {
      data: {
        ClientToServer: "Cell- or value-level changes",
        ServerToClient: "Cell- or value-level changes",
        ClientToClient: "Cell- or value-level changes",
      },
    },
  },
  UIRelated: {
    Components: {
      data: ["React", "ReactDom"],
    },
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ["Data Inspector"],
    },
    TypeSupport: {
      data: "TypeScript, inferred from Schemas",
    },
  },
});
