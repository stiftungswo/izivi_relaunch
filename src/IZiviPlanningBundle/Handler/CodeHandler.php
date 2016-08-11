<?php
namespace IZiviPlanningBundle\Handler;

use IZiviPlanningBundle\Entity\Code;
use IZiviPlanningBundle\Exception\InvalidFormException;
use IZiviPlanningBundle\Form\CodeFormType;

class CodeHandler extends GenericHandler
{
    public function post(array $parameters)
    {
        $type = $parameters['type'];
        if (!in_array($type, Code::TYPES)) {
            throw new InvalidFormException("Given type '$type' is invalid'");
        }
        $entity = $this->newClassInstance();
        $parameters = $this->flattenEtityReference($parameters);
        $parameters['code'] = $this->readable_random_string();
        return $this->processForm($entity, $parameters, CodeFormType::class, 'POST');
    }

    /**
     * Generates human-readable string.
     *
     * @param string $length Desired length of random string.
     *
     * retuen string Random string.
     */
    private function readable_random_string($length = 6)
    {
        $string     = '';
        $vowels     = array('A','E','I','O','U');
        $consonants = array(
            'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
            'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
        );
        // Seed it
        srand((double) microtime() * 1000000);
        $max = $length/2;
        for ($i = 1; $i <= $max; $i++)
        {
            $string .= $consonants[rand(0,19)];
            $string .= $vowels[rand(0,4)];
        }
        return $string;
    }
}