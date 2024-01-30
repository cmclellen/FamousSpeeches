param location string
param resourceNameFormat string
param tags object

@allowed([
  'S0'
])
param sku string = 'S0'

resource cognitiveService 'Microsoft.CognitiveServices/accounts@2023-10-01-preview' = {
  name: format(resourceNameFormat, 'oai', '')  
  location: location
  tags: tags
  sku: {
    name: sku
  }
  kind: 'OpenAI'
  properties: {
    apiProperties: {
      statisticsEnabled: false
    }
    networkAcls: {
      defaultAction: 'Allow'
    }
    publicNetworkAccess: 'Enabled'
  }

  resource deployment_ada 'deployments' = {
    name: 'ada-deployment'
    properties: {
      model: {
        format: 'OpenAI'
        name: 'text-embedding-ada-002'
        version: '2'
      }
    }
    tags: tags
  }

  resource deployment_gpt35 'deployments' = {
    name: 'gpt35-deployment'
    properties: {
      model: {
        format: 'OpenAI'
        name: 'gpt-35-turbo'
        version: '0613'
      }
    }
    tags: tags
  }
}
