export class Project {
  public currentFunding: number = 0;
  public pledges: string[] = ["0"];

  constructor(public title: string, public description: string, public whyFundUs: string, public category: string, public fundingGoal: number) { }
}

export class Pledge {
  constructor(public amount: number, public description: string, public project: string) { }
}
