const core = require('@actions/core');
const { exec } = require("child_process");

try {
    const args = core.getInput('args');
    const repository = core.getInput('repository');
    core.info(`path: ${repository}`);

    exec(`..\\..\\_actions\\codemerx\\assembly-differ-action\\v0.3.1\\binaries\\assembly-differ.exe ${args}`, (error, stdout, stderr) => {
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

    exec(`DIR`, (error, stdout, stderr) =>{
        core.info(`stdout: ${stdout}`);
    });
} catch (error) {
    core.setFailed(error.message);
}
