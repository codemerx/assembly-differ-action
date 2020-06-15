const core = require('@actions/core');
const { exec } = require("child_process");

const executeCommand = (command, callback) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            core.setFailed(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            core.setFailed(`stderr: ${stderr}`);
            return;
        }

        try {
            callback(stdout);
        } catch (error) {
            core.setFailed(error.message);
            throw error;
        }
    });
}

const installAssemblyDiffer = (next) => {
    executeCommand('dotnet tool install -g assembly-differ', next);
}

const runAssemblyDiffer = (args) => {
    executeCommand(`assembly-differ ${args}`, (stdout) => {
        core.info(`stdout: ${stdout}`);
    });
}

const main = () => {
    try {
        installAssemblyDiffer(() => {
            const args = core.getInput('args');
            runAssemblyDiffer(args);
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();
