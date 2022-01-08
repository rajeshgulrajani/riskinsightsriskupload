module.exports = (sequelize, Sequelize) => {
    const RiskUpload = sequelize.define("riskupload", {
      /*title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }*/
      data: {
        type: Sequelize.JSONB,
      }
    });
  
    return RiskUpload;
  };