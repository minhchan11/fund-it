export class Project {
  public currentFunding: number = 0;
  public pledges: string[] = [];

  constructor(public title: string, public description: string, public whyFundUs: string, public about: string, public category: string, public fundingGoal: number, public profilePic: string) { }
}

export class Pledge {
  constructor(public amount: number, public description: string, public project: string) { }
}
