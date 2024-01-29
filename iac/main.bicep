

@description('That name is the name of our application. It has to be unique.Type a name followed by your resource group name. (<name>-<resourceGroupName>)')
param cognitiveServiceName string = 'CognitiveService-${uniqueString(resourceGroup().id)}'

@description('Location for all resources.')
param location string = resourceGroup().location

@description('The environment.')
param environment string

@allowed([
  'S0'
])
param sku string = 'S0'

@description('Tags to tag all resources.')
param tags object = {
  Environment: environment
}

var resourceNameFormat = '{0}-famspch-${environment}'

resource cognitiveService 'Microsoft.CognitiveServices/accounts@2021-10-01' = {
  name: format(resourceNameFormat, 'oai')
  location: location
  sku: {
    name: sku
  }
  kind: 'OpenAI'
  properties: {
    apiProperties: {
      statisticsEnabled: false
    }
  }
}
