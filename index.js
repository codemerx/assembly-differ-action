const core = require('@actions/core');
const { exec } = require("child_process");

const main = () => {
    try {
        const args = core.getInput('args');
        const assemblyDifferBinaries = core.getInput('assembly-differ-binaries');
        core.info(`path: ${assemblyDifferBinaries}`);
    
        exec(`${assemblyDifferBinaries}\\assembly-differ.exe ${args}`, (error, stdout, stderr) => {
            if (error) {
                core.setFailed(`error: ${error.message}`);
                return;
            }
    
            if (stderr) {
                core.setFailed(`stderr: ${stderr}`);
                return;
            }
    
            core.info(`stdout: ${stdout}`);
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();
