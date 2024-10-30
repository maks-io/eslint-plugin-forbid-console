module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "forbid usage of console + optionally display custom message",
      category: "Possible Errors",
      recommended: true,
    },
    schema: [
      {
        type: "object",
        properties: {
          ignoreLevels: {
            type: "array",
            items: { type: "string" },
            description: "Array of console methods to ignore",
          },
          customMessage: {
            type: "string",
            description: "Custom error or warning message",
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      noConsole: "{{message}}",
    },
  },
  create(context) {
    const options = context.options[0] || {};
    const ignoreLevels = options.ignoreLevels || [];

    return {
      MemberExpression(node) {
        if (
          node.object.name === "console" &&
          !ignoreLevels.includes(node.property.name)
        ) {
          const customMessage =
            options.customMessage ||
            `Unexpected console.${node.property.name} statement.`;

          context.report({
            node,
            messageId: "noConsole",
            data: {
              message: customMessage,
            },
          });
        }
      },
    };
  },
};
