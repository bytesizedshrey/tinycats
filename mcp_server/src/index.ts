import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getAllCatsTool, recommendCatsTool } from "./tools/recommendCats.tool.ts";

// Created server instance and got the server here registerd
const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

server.registerTool(
    //path
  "recommend_cats",
  //middleware
  {
    title: "recommend_cats",
    description: "recommend best cat breed according to inputs",
    inputSchema: {
      kidsFriendly: z.boolean(),
      apartmentFriendly: z.boolean(),
    },
  },
  //callback
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

server.registerTool(
    "get_all_cats",
    {
      title: "all cats",
      description: "cats Data",
    },
    async () => {
      const result = await getAllCatsTool();
  
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

const transporter = new StdioServerTransport()

await server.connect(transporter)

console.error('tiny cats mcp running...') 