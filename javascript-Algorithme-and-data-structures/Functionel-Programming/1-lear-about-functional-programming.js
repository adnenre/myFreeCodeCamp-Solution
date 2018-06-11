

/**
 * solution by @adnen_rebai
 */


 /**
  * A long process to prepare tea
  * @return [string] a cup of tea
  */
 const prepareTea = () => 'greenTea';

 /**
  * Get give number of cup of tea,
  * @param {number} numberOfCups Numer of required cups of tea.
  * @return {array<String>} Given amout of tea cups.
  */

  const getTea = (numOfCups) => {
      const teaCups = [];

      for (let cups = 1; cups <= numOfCups; cups++){
          const teaCup = prepareTea();
          teaCups.push(teaCup);
      }

      return teaCups;
  };

  
  const tea4TeamFCC = getTea(40);

  console.log(tea4TeamFCC);