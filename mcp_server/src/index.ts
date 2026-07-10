import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { recommendCatsTool } from "./tools/recommendCats.tool.ts";

// Created server instance and got the server here registerd
const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

server.registerTool(
  "recommend_cats",
  {
    title: "recommend_cats",
    description: "recommend best cat breed according to inputs",
    inputSchema: {
      kidsFriendly: z.boolean(),
      apartmentFriendly: z.boolean(),
    },
  },
  async ({kidsFriendly,apartmentFriendly}) => {
    const result = await recommendCatsTool(kidsFriendly,apartmentFriendly);

    return {
        content : [
            {
                type : "text",
                text : JSON.stringify(result),
            }
        ]
    }
  },
);

console.log('tiny cats mcp running...') 