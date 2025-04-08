const { format } = require("@fast-csv/format");

const wizardModel = require("../models/wizardModel");

const exportWizardCSV = async (req, res) => {
    try {
        const wizards =  await wizardModel.getWizards();

        res.setHeader("Content-Disposition", "attachment; filename=wizards.csv");
        res.setHeader("Content-Type", "text-csv");

        const csvStream = format({ headers: true});
        csvStream.pipe(res);

        wizards.forEach((wizard) => {
            csvStream.write({
                Id: wizard.id,
                Nome: wizard.name,
                Casa: wizard.house_name || "Sem Casa"
            });
        });
        
        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV"});
    }
};

module.exports = { exportWizardCSV };