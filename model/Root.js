const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class IfcRoot extends Model {}
IfcRoot.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'IfcRoot',
  }
);

class IfcObjectDefinition extends IfcRoot {}

class IfcObject extends IfcObjectDefinition {}

class IfcProduct extends IfcObject {}

class IfcElement extends IfcProduct {}

class IfcDistributionElement extends IfcElement {}

class IfcDistributionFlowElement extends IfcDistributionElement {}

class IfcFlowStorageDevice extends IfcDistributionFlowElement {}

class IfcTank extends IfcFlowStorageDevice {}

console.log(SysRoot === sequelize.models.SysRoot);