def handler(event, context):
    """
    Lambda handler for Part 1.
    Expects the message as a path parameter from API Gateway HTTP API.
    Returns a greeting message that includes the provided message.
    """
    message = None
    if "pathParameters" in event and event["pathParameters"]:
        message = event["pathParameters"].get("message")
    else:
        path = event.get("rawPath", "/")
        if path:
            message = path.rstrip("/").split("/")[-1]

    if message:
        response_body = { "message": f"Hello, {message}!" }
    else:
        response_body = { "message": "Hello from Lambda! No message provided." }

    return {
        "statusCode": 200,
        "headers": { "Content-Type": "application/json" },
        "body": __import__('json').dumps(response_body)
    }
