param location string
param resourceNameFormat string
param tags object

resource sa 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: replace(format(resourceNameFormat, 'st', ''), '-', '')
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {}
  tags: tags

  resource defaultBlobService 'blobServices' existing = {
    name: 'default'

    resource pdf_container 'containers' = {
      name: 'pdf_docs'
      properties: {
        publicAccess: 'Blob'
      }
    }
  }
}
