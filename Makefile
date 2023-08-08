generate:
	@openapi-generator generate -i https://api.pdfgen.dev/v1/swagger.yaml -g typescript-node -c config.yaml -p pdfgen -o . --git-repo-id pdfgen-sdk-node --git-user-id pdfgen-dev