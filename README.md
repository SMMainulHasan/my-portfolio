# Setup Configuration

## 1. PoerSell setup

- First install PowerShell from windows app store Or, from other github
- Create powershell $PROFILE in user/document/PowerShell/Microsoft.PowerShell_profile.ps1

<details><summary>Install PowerShell Terminal Icons</summary>
<p>

#### Installing Terminal-Icons from PowerShell Gallery

Run this command to install

```sh
Install-Module -Name Terminal-Icons
```

Import it into PowerShell $profile

```sh
Import-Module -name Terminal-Icons
```

</p>
</details>

<details><summary>Install PowerShell PSReadLine</summary>
<p>

#### Installing PSReadLine from PowerShell Gallery

Run this command to install

```sh
Install-Module PSReadLine -RequiredVersion 2.2.5
```

Import & set this config into PowerShell $profile

```sh
Import-Module -name PSReadLine

# Shows navigable menu of all options when hitting Tab

Set-PSReadLineKeyHandler -Key Tab -Function MenuComplete

# Autocompletetion ofr Arrow keys

Set-PSReadLineOption -HistorySearchCursorMovesToEnd
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward

set-PSReadLineOption -ShowToolTips
set-PSReadLineOption -PredictionSource History

#Set the color for Prediction (auto-suggestion)
Set-PSReadlineOption -Colors @{InlinePrediction = 'DarkGreen' }
```

</p>
</details>

## 2. Oh-my-posh setup

### This is official documentation https://ohmyposh.dev/docs/installation/windows

use this command to install oh-my-posh

```sh
Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://ohmyposh.dev/install.ps1'))
```

Then set this into the PowerShell $profile

```sh
oh-my-posh init pwsh --config ~/.custom.omp.json | Invoke-Expression
```
