# Assembly Differ
Ensure library's public API has the expected level of changes (major, minor or patch) since a previous version. Built on top of [assembly-differ](https://github.com/nullean/assembly-differ) and [JustAssembly](https://github.com/telerik/JustAssembly).

# Usage
This action is simple wrapper of the `assembly-differ` command-line tool. The arguments passed as the `args` parameter are forwarded to the command-line tool. The available assembly providers and examples can be found [here](https://github.com/nullean/assembly-differ#run).

## Example usage
```yml
jobs:
  build:
    steps:
    ...
    - uses: codemerx/assembly-differ-action@v1
      with:
        args: '"assembly|${{github.workspace}}\latest-release\Library.dll" "assembly|${{github.workspace}}\Library\Library\bin\debug\netstandard2.0\Library.dll" -p=major'
```

**Note:** `-p=<level>` is required to ensure failed job in case of public API changes higher or equal to the provided level, e.g. the example job will fail if the library has breaking changes. Possible values are `major`, `minor` and `patch`.

# License
This project is [AGPL](https://github.com/codemerx/assembly-differ-action/blob/master/LICENSE) licensed.
