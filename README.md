# RAG :: Famous Speeches

Retrieval Augmented Generation (RAG) builds on a LLM (Large Language Model) in a way that it references a specific knowledge base (famous speeches PDFs in this case) before returning a response, i.e. giving a chatbot relevant context of a particular subject that it'll use to generate a response to a user's question with.

This repo just handles the provisioning of Azure resources using Bicep, and then copies the seed daata into the Blob store. This data is used to seed Azure AI Search with help from the embedding model.