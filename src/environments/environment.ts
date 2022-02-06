export const environment = {
//worked on govcloud, dev.example.com and fr-pools, paul, adam, sandy
// Cognito:
// User Pools:
// fr-pools (User Pools) (SAML fr-idp) (EKS govcloud)
// https://dev.example.com/am/IDPSloSoap/metaAlias/meta-idp
// Identity Pool: us-gov-west-1:c5c5be8d-2b46-4118-a6f8-2180c917720e
// fr-cognito-id-pool (auth provider using Cognito fr-pools which is tied to SAML fr-idp using EKS govcloud) (no IAM identity provider needed)

  production: false,

  //sso_api_username: '28omb38m5vuf3bv2dpa1efl4bv',
  //sso_api_pwd: '1cdr9hv9d8o3r5e6u48t7pjqu82lue8nidq49t46s3tmg4i7b4mf',

  //loginURL: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/oauth2/authorize?' +
  //            'client_id=28omb38m5vuf3bv2dpa1efl4bv&response_type=code&scope=openid+profile&' +
  //            'redirect_uri=http://localhost:4200/callback&idp_identifier=fr-idp',

  sso_api_username: 'clientOIDC_0',
  sso_api_pwd: '409PbRryzhKMTIep4Pqpiutq',

  loginURL: 'https://a69e80e8acf234136b39b2ab4696b994-173064cd886f9481.elb.us-gov-east-1.amazonaws.com:443/am/oauth2/authorize?' +
              'client_id=clientOIDC_0&response_type=code&scope=openid+profile+email&' +
              'redirect_uri=http://localhost:4200/callback',

  redirectURL: 'http://localhost:4200/callback',

  //cognitoTokenURL: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/oauth2/token',

  //logout: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/logout?' +
  //        'client_id=28omb38m5vuf3bv2dpa1efl4bv&' +
  //        'logout_uri=http://localhost:4200/home',

  oidcTokenURL: 'http://localhost:4200/token',

  detailURL: 'http://localhost:4200/detail',

  postLogoutRedirectURL: 'http://localhost:4200/home',

  logout: 'http://localhost:4200/logout',

  cognitoUrl: 'https://cognito-identity.us-gov-west-1.amazonaws.com',

  identityPoolId: 'us-gov-west-1:00c215d3-b6a4-49ee-8460-037858bd0f30',     

  //s3BucketEndPoint: 'https://acme-project-legal.s3.us-gov-east-1.amazonaws.com',

  s3BucketEndPointURL: 'http://localhost:4200/s3BucketEndPoint'

};

