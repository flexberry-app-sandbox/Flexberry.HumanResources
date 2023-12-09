import { Serializer as CompanySerializer } from
  '../mixins/regenerated/serializers/i-i-s-human-resources-company';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CompanySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
