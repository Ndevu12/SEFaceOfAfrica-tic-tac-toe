# SEFaceOfAfrica-tic-tac-toe
Tic tac toe Challenge

## How to contribute

clone repo
```bash
git clone https://github.com/Ndevu12/SEFaceOfAfrica-tic-tac-toe.git
cd SEFaceOfAfrica-tic-tac-toe
```
### Start the server

Run

```javascript
yarn install
yarn dev
```

For Production run

```javascript
yarn start
```

### Push changes

Create a new branch and Pull request for every new changes and wait for pull request approvals

Create new branch

```javascript
git checkout -b <new_branch_name>
```

Commit changes

```javascript
git add .
git commit -m <'new commit message'>
git push origin <branch_name>
```

### Avoid many commits

To avoid many commit message use the following for committing changes on the existing Pull Request or branch.

```javascript
git add .
git commit --amend --no-edit
git push origin <branch_name> -f
```
