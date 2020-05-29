const core = require('@actions/core');
const { exec } = require("child_process");

try {
    const args = core.getInput('args');
    core.setOutput('Running assembly differ');

    exec(`dir`, (error, stdout, stderr) => {
        core.setOutput('Running inside callback');

        if (error) {
            core.setFailed(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            core.setFailed(`stderr: ${stderr}`);
            return;
        }

        core.setOutput(`stdout: ${stdout}`);
    });
} catch (error) {
    core.setFailed(error.message);
}
