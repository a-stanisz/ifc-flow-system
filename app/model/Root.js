const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class SysRoot extends Model {}

SysRoot.init(
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
    modelName: 'SysRoot',
  }
);

console.log(SysRoot === sequelize.models.SysRoot);

class SysObjectDefinition extends SysRoot {}

class SysObject extends SysObjectDefinition {}

class SysProduct extends SysObject {}

class SysElement extends SysProduct {}

class SysDistributionElement extends SysElement {}

class SysDistributionFlowElement extends SysDistributionElement {}

class SysFlowStorageDevice extends SysDistributionFlowElement {}

class SysTank extends SysFlowStorageDevice {}
