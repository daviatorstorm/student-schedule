import { StudentSchedulePage } from './app.po';

describe('student-schedule App', function() {
  let page: StudentSchedulePage;

  beforeEach(() => {
    page = new StudentSchedulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
