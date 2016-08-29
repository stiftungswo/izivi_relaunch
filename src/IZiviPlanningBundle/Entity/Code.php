<?php

namespace IZiviPlanningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * Code
 *
 * @ORM\Table(name="codes")
 * @ORM\Entity(repositoryClass="IZiviPlanningBundle\Repository\CodeRepository")
 */
class Code extends Entity implements EntityInterface
{
    const REGISTRATION_TYPE = 'REGISTRATION';
    const SERVICE_APPLICATION_TYPE = 'SERVICE_APPLICATION';
    const TYPES = array(Code::REGISTRATION_TYPE, Code::SERVICE_APPLICATION_TYPE);

    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(name="code", type="string", length=50)
     */
    public $code;

    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(name="type", type="string", length=255)
     */
    public $type;

    /**
     * Set code
     *
     * @param string $code
     *
     * @JMS\Groups({"List"})
     * @return Code
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get code
     *
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set type
     *
     * @param string $type
     *
     * @return Code
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }
}

