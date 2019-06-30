# MFOSSociety

> Free And Open Source Society Of Manipal University Jaipur. This is the official website for the MFOSSociety Wing of Manipal University Jaipur.


**Visit :** https://mfossociety.github.io/


## Things you should know before contributing

- All pull requests need to be associated to an issue.
- All PRs need to be assigned to the person working on it.
- If an issue cannot be completed in less than a day, it should be broken up into multiple issues.
- Make pull requests from your own forks (even if you have write rights to the repository, do not create new branches, develop on your own branches).
- State the actual change or enhancement in the commit message of PRs (do not just state “Fixes issue #123”).
- Add the issue number into the description (this helps to speed up reviews as reviewers can simply click to get more info in the issue itself).
- Write clear meaningful git commit messages (Do read http://chris.beams.io/posts/git-commit/).
- Match pull requests with issues and make sure your pull requests description contains GitHub’s special keyword references that automatically close the related issue when the pull request is merged. (More info at https://github.com/blog/1506-closing-issues-via-pull-requests).
- When you make very minor changes to a pull request of yours (like for example fixing a failing travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterwards so that you don’t have an absurd number of commits for a very small fix (Learn how to squash at https://davidwalsh.name/squash-commits-git).
- Add a screenshot if you changed anything in the UI of a project. When you’re submitting a pull request for a UI-related issue, please add a screenshot of your change or a link to a deployment where it can be tested out along with your pull request. It makes it much easier for the reviewers and helps to speed up the process. You’ll also get reviews quicker.
- Add a link to your deployment of the project, where reviewers can check out what you have changed (especially for smaller changes this is very helpful as the reviewer might not even need to set up the system itself and test it. Again this speeds up the review process a lot).
- Always ensure CI and tests are successful.
- Help to resolve merge conflicts (especially if there are several PRs at the same time, merge conflicts are common. Help the reviewers and solve merge conflicts to speed up the process.).
- Merging Pull Requests should only happen if at least two contributors reviewed the PR and approved it.

## How to run locally?

1. First of all you need to complete some requirements. Install them if you don't have things in [this documentation](https://jekyllrb.com/docs/installation/).
2. Open your terminal and install jekyll `gem install jekyll bundler`.
3. Download and install git on your system.
4. Go to [MFOSSociety](https://github.com/MFOSSociety/MFOSSociety.github.io) and make a fork if you haven't already.
5. Open Git Bash and clone your repository into your pc. `git clone https://github.com/<_your-username_>/MFOSSociety.github.io`.
6. Go inside to your cloned repo, and open Git Bash. _(esp. for windows user)_
7. Type `bundle install` to install dependencies.
8. Type `bundle exec jekyll serve`. 
9. You will see a server address. To view the site, go to `localhost:4000` from your favourite browser.

**Now you can start working on issues.**


## How to add yourself to developer section to the website

- Choose any current mentor and seek permission before making **Pull Request**
- Size of the profile image - 240x240 px
- Upload the picture to the img/students folder - with a suitable name
-  Add yourself to the `_data/students.yml file` as shown below

```yaml
- name: Your name
  github: Your github link
  img: Your imgage location e.g. img/filename.jpg 
```

## How to add a New Project to the website

- Choose a project and transfer it to MFOSSociety, ignore this step if it's our native project.
- Get a screenshot with size 1366x566 px
- Upload the picture to the img folder - with a suitable name
- Add the project to the `_data/orgprojects.yml` as shown below

```yaml
- title: Project name
  img: Project screenshot
  desc: Project description
  github: Project github link
  try: URL where project is hosted 
```