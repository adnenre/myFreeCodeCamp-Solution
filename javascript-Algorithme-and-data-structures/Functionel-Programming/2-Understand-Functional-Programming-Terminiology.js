
/**
 * @adnen_rebai
 */

 /**
  * A long process to preapare green tea
  * @return {string} A cup of green Tea
  */

  const prepareGreenTea = () => 'greenTea';

  /**
   * A long process to prepare black tea
   * @return {string} A cup of black tea.
   */

   const prepareBlackTea = () => 'BlackTea';

   /**
    * Get given number of cups of tea
    * @param {function():string} prepareTea the type tea preparing function.
    * @param {number} numOfCups Number of required cups of tea.
    * @return {Array<string>} Given amount of tea cups
    */

    const getTea = (prepareTea, numOfCups) => {
        const teaCups = [];

        for (let cups = 1; cups < numOfCups; cups++){
         const teaCup = prepareTea();
         teaCups.push(teaCup);
        }
        return teaCups;
    };


    const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
    const tea4BlackTeamFCC = getTea(prepareBlackTea,13);

    console.log(tea4BlackTeamFCC);
    console.log(tea4GreenTeamFCC);