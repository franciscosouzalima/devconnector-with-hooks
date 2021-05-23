import React, { useEffect, useState } from 'react'

const ProfileGithub = ({ username }) => {
  const [gitSettings, setGitSettings] = useState({
    clientId: '6663adad4f239898af51',
    clientSecret: '7e37db12fa7ad0589490ccbdd2a51463c2cf518e',
    count: 5,
    sort: 'created: asc',
    repos: [],
  })

  useEffect(() => {
    const fetchGit = async () => {
      await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${gitSettings.count}&sort=${gitSettings.sort}&client_id=${gitSettings.clientId}&client_secret=${gitSettings.clientSecret}`
      )
        .then((res) => res.json())
        .then((data) => {
          setGitSettings({
            ...gitSettings,
            repos: data,
          })
        })
        .catch((err) => console.log(err))
    }
    fetchGit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])

  if (gitSettings.repos.message) {
    return (
      <div>
        <hr />
        <h3 className='mb-4'>Latest Github Repos</h3>
        <p>No Github repositories found for this user.</p>
      </div>
    )
  }

  if (gitSettings.repos)
    return (
      <div>
        <hr />
        <h3 className='mb-4'>Latest Github Repos</h3>
        {gitSettings.repos.length < 0
          ? 'No repos available'
          : gitSettings.repos.map((repo) => (
              <div key={repo.id} className='card card-body mb-2'>
                <div className='row'>
                  <div className='col-md-6'>
                    <h4>
                      <a
                        href={repo.html_url}
                        className='text-info'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {repo.name}
                      </a>
                    </h4>
                    <p>{repo.description}</p>
                  </div>
                  <div className='col-md-6'>
                    <span className='badge badge-info mr-1'>
                      Stars: {repo.stargazers_count}
                    </span>
                    <span className='badge badge-secondary mr-1'>
                      Watchers: {repo.watchers_count}
                    </span>
                    <span className='badge badge-info'>
                      Forks: {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    )
}

export default ProfileGithub
