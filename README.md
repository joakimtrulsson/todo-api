# ToDo API med Amazon AWS och Serverless Framework
Det här är mitt första projekt där jag använder Amazon AWS och Serverless Framework för att skapa ett enkelt ToDo API med hjälp av DynamoDB som databas. 

## Förutsättningar

Innan du provar detta projekt, se till att du har följande förutsättningar:

- En AWS-konto: Du måste ha ett AWS-konto för att använda AWS-tjänsterna.
- Serverless Framework installerat: Du kan installera Serverless Framework genom att köra `npm install -g serverless` om du inte redan har det installerat.
- AWS CLI installerat och konfigurerat: Se till att AWS CLI är installerat och att du har konfigurerat ditt AWS-konto med rätt behörigheter.

## Konfigurera projektet

1. Klona detta repo till din lokala maskin.

2. Gå till projektets rotkatalog.

3. Installera projektets beroenden genom att köra följande kommando:

```bash
npm install

```

## Konfigurera AWS-tjänster

För att konfigurera de AWS-tjänster som projektet använder, måste du skapa en serverless.yml-fil med den nödvändiga konfigurationen. Du kan anpassa denna fil efter dina behov och preferenser.

## Deploya projektet

När du har konfigurerat projektet och AWS-tjänsterna kan du deploya det med Serverless Framework genom att köra:

```bash
serverless deploy

```
