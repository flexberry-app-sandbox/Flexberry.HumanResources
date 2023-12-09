import { Serializer as PersonPositionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-human-resources-person-position';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PersonPositionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
