<?php
namespace IZiviPlanningBundle\Handler;

use IZiviPlanningBundle\Entity\Code;
use IZiviPlanningBundle\Entity\EntityInterface;
use Symfony\Component\Cache\Exception\InvalidArgumentException;

class UserHandler extends GenericHandler
{
    private $codeHandler = 'izivi.code.handler';

    public function post(array $parameters)
    {
        $codeHandler = $this->container->get($this->codeHandler);
        $code = $parameters['code'];
        $codeEntry = $codeHandler->findByCodeAndType($code, Code::REGISTRATION_TYPE);
        if (empty($codeEntry)) {
            throw new InvalidArgumentException("Given code doesn't seem to be correct.");
        }
        unset($parameters['code']);
        $user = parent::post($parameters);
        $codeHandler->delete($codeEntry);
        return $user;
    }
}