# node-lambda-starter-kit

Enable to focus on cording with [node-lambda](https://github.com/motdotla/node-lambda).

![](	https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)
<!-- add ci status badge -->

## :pushpin: Description
Suitable for minimal AWS Lambda.

## :white_check_mark: Features
<!-- list up your product features. -->
- :art: support .editorconfig
- :shirt: support .eslintrc
- :coffee: support test with mocha

---

## :floppy_disk: Install
### Requirements
* node v8.10+
* yarn v1.3.2+

### Step
1. Install
```
$ git clone ...
$ yarn install
```

## :arrow_forward: Usage
UsageUsageUsage
<!-- show basic usage -->

*invoke local*
```
$ yarn invoke
```

*run test*
```
$ yarn test
```

*run eslint*
```
$ yarn eslint
```

*deploy labmbda*

At first, overwrite .env. Your lambda role arn & region & function name(OS X example bellow)
```
$ sed -i '' 's/\(AWS_ROLE_ARN=\).*/\1<your_lambda_arn>/' .env
$ sed -i '' 's/\(AWS_REGION=\).*/\1<your_region>/' .env
$ sed -i '' 's/\(AWS_FUNCTION_NAME=\).*/\1<your_lambda_name>/' .env
```

Then, you can deploy like bellow.
```
$ yarn deploy
```
## :information_source: Anything else
<!-- show how to test, how to contribute -->

## :pencil: Author
[mesh1nek0x0](https://github.com/mesh1neko)

## :clipboard: LICENCE
MIT