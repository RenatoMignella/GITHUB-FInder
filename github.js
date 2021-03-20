class Github {
 constructor(){
    this.client_id = '2c7c607af3d5b7a78544'; 
    this.client_secret = '1af3763901a0289efc8ba386144c3f67f1a09922';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
 }

async getUser(user) {
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
 
  const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile = await profileResponse.json();
  const repos = await repoResponse.json();


  return{
        profile,
        repos
    
  }
}

}