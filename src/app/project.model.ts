export class Project {
  public currentFunding: number = 0;

  constructor(public title: string, public description: string, public whyFundUs: string, public about: string, public category: string, public fundingGoal: number, public profilePic: string, public pledges: Pledge[]) { }
}

export class Pledge {
  constructor(public amount: number, public description: string, public project: Project) { }
}
