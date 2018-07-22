import { DH_NOT_SUITABLE_GENERATOR } from "constants";
import { AuthenticationDetails } from "amazon-cognito-identity-js";


Dynamodb.put_item(Item= Itemfile)

Dynamodb to put s3 object identifier of file and cognito unique user id in one table



You can also use the object metadata support in Amazon S3 to provide a link
back to the parent item in DynamoDB. Store the primary key value of the item
 as Amazon S3 metadata of the object in Amazon S3. Doing this often helps with
  maintenance of the Amazon S3 objects.

  create lambda function that triggers after cognito Authentication:
  function getCognitoId(event){
    return event.request.userAttributes.sub;
  }